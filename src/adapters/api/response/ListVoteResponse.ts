import ApiResponse from './ApiResponse'
import Voter from '../entity/Voter'

export default interface ListVoteResponse extends ApiResponse<Voter[]> {}