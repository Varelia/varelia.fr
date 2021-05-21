import axios, {AxiosResponse} from 'axios'

const ENDPOINT: string = 'http://localhost:8080'

function sleep(ms: number): Promise<any> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function fetchAllVotes<T>(): Promise<AxiosResponse<T>> {
    return fetchVotes(15)
}

export async function fetchVotes<T>(limit: number): Promise<AxiosResponse<T>> {
    await sleep(2000)
    return axios.get(ENDPOINT + '/vote/list/' + limit)
}