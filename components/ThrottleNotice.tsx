import { globalDelayMs } from '../utils'

const ThrottleNotice = () => {
    return (
        <>
            {globalDelayMs > 0 && (
                <div
                    style={{
                        background: '#eed202',
                        color: '#000000',
                        textAlign: 'center',
                        padding: '5px',
                        fontSize: 13
                    }}
                >
                    🚧 This site API calls are throttled by {globalDelayMs}ms to better showcase performance differences
                </div>
            )}
        </>
    )
}

export default ThrottleNotice
