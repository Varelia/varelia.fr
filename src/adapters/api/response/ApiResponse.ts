export default interface ApiResponse<T> {
    status: number
    body: {} & T
}