''
import { useQuery } from "@tanstack/react-query";
import { api } from "../apiconfig";
 
const getPdfList = async (currentPage,itemsPerPage) => {
  const url = `/v1/get-list-pdf?page=${currentPage}&pageSize=${itemsPerPage}`;
 
  const response = await api.get(url);
  return response?.data;
};
 
export const usegetPdfList = (currentPage,itemsPerPage) =>
  useQuery({
    queryKey: ["pdf-list",currentPage,itemsPerPage],
    queryFn: () => getPdfList(currentPage,itemsPerPage),
  });