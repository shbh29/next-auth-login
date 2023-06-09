import styles from './session.module.css';
import {useSession} from 'next-auth/react'

function Session(props) {
    const {data: session, status} = useSession();
    console.log(session);
    return (
        <>
            <h1>Session data </h1>
            <div className={styles.div} >
                <p>status: {status}</p>
                <p>session: {session?.user ? JSON.stringify(session?.user) : "no data" }</p>
            </div>
        </>
    )
}

export default Session;