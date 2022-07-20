import {FC, useEffect, useState} from "react";
import {PublicKey} from "@solana/web3.js";


type PhantomEvent = "disconnect" | "connect" | "accountChanged";

interface ConnectOpts {
    onlyIfTrusted: boolean;
}

interface PhantomProvider {
    connect: (opts?: Partial<ConnectOpts>) => Promise<{ publicKey: PublicKey }>;
    disconnect: ()=>Promise<void>;
    on: (event: PhantomEvent, callback: (args:any)=>void) => void;
    isPhantom: boolean;
}

type WindowWithSolana = Window & { 
    solana?: PhantomProvider;
}

interface CallBackTest {
    func: (key: string) => void;
}

const Wallet: FC<CallBackTest> = (props) => {

    const [ walletAvail, setWalletAvail ] = useState(false);
    const [ provider, setProvider ] = useState<PhantomProvider | null>(null);
    const [ connected, setConnected ] = useState(false);
    const [ pubKey, setPubKey ] = useState<PublicKey | null>(null);


    useEffect( ()=>{
        if ("solana" in window) {
            const solWindow = window as WindowWithSolana;
            if (solWindow?.solana?.isPhantom) {
                setProvider(solWindow.solana);
                setWalletAvail(true);
                // Attemp an eager connection
                solWindow.solana.connect({ onlyIfTrusted: true });
            }
        }
    }, []);

    useEffect( () => {
        provider?.on("connect", (publicKey: PublicKey)=>{ 
            // console.log(`connect event: ${publicKey}`);
            setConnected(true); 
            // <OrderForm closeModal={null} wallet={publicKey}/>
            setPubKey(publicKey);
            props.func(`${publicKey}`);
        });
        provider?.on("disconnect", ()=>{ 
            console.log("disconnect event");
            setConnected(false); 
            setPubKey(null);
        });

    }, [provider]);


    const connectHandler: React.MouseEventHandler<HTMLButtonElement> = (event) => {     
        // <Marketplace wallet={`${pubKey}`}/>     
        provider?.connect()
        .catch((err) => { console.error("connect ERROR:", err); });      
    }

    const disconnectHandler: React.MouseEventHandler<HTMLButtonElement> = (event) => {        
        provider?.disconnect()
        .catch((err) => {console.error("disconnect ERROR:", err); });
        // <Card wallet={null}/>
    }

    return (
        <div>
            { walletAvail ?
                < >
                <div className="flex flex-row justify-end px-5">
                { !connected && <button className="rounded-full bg-[#28b082] text-white px-4 py-2 font-bold text-sm lg:px-5 lg:py-3 lg:text-base hover:-translate-y-1
                       hover:duration-300 hover:scale-105 hover:animate-pulse" disabled={connected} onClick={connectHandler}>Log in</button>}
                { connected && <button className="rounded-full bg-[#28b082] text-white px-4 py-2 font-bold text-sm lg:px-5 lg:py-3 lg:text-base hover:-translate-y-1
                       hover:duration-300 hover:scale-105 hover:animate-pulse" disabled={!connected} onClick={disconnectHandler}>Log out</button>}
                </div>
                { connected ? <p className="text-sm pt-4 pr-6">Your logged in with wallet : {pubKey?.toBase58().substring(0, 4)}...{pubKey?.toBase58().substring(pubKey.toBase58().length - 4)} </p> : null }
                </>
            :
                <>
                <p>Opps!!! Phantom is not available.<br/> Go get it <a href="https://phantom.app/" className="underline">here</a>.</p>
                </>
            }
        </div>
    );
}

export default Wallet;