class Util {
    static joinEndPoint = (...args: Array<string>) => {
        return args.join()
    }

    static sleep = async (ms: number) => {
        return new Promise(resolve => setTimeout(resolve, ms))
    }
}

export default Util