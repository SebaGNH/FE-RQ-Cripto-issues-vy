import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../helpers/githubApi"
import { Issue } from "../interfaces/issue"

const getIssue = async(): Promise<Issue[]> => {
  const {data} = await githubApi.get<Issue[]>('/issues');
  return data;
}

// Hook
export const useIssues = () => {
  const dataIssuesQuery = useQuery(['issues'], getIssue)
/*   return {
    dataIssuesQuery,
  } */
  return dataIssuesQuery;
}
