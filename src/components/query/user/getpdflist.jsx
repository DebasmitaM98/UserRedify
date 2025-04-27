''
import { useQuery } from "@tanstack/react-query";
import { api } from "../apiconfig";
 
const getPdfList = async (currentPage,itemsPerPage,searchTerm) => {
  let url = `/v1/get-list-pdf?page=${currentPage}&pageSize=${itemsPerPage}`;
 if(searchTerm){
  url+=`&search=${searchTerm}`
 }
  
 
  const response = await api.get(url);
  return response?.data;
};
 
export const usegetPdfList = (currentPage,itemsPerPage,searchTerm) =>
  useQuery({
    queryKey: ["pdf-list",currentPage,itemsPerPage,searchTerm],
    queryFn: () => getPdfList(currentPage,itemsPerPage,searchTerm),
  });