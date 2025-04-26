import { useQuery } from "@tanstack/react-query";
import { api } from "../apiconfig";

// Function to fetch PDF details by ID
const getDetailsPdfList = async (id) => {
  const url = `/v1/get-details-pdf?id=${id}`; 

  const response = await api.get(url);
  return response?.data;
};

// React Query hook
export const useGetDetailsPdfList = (id) =>
  useQuery({
    queryKey: ["pdf-details", id], 
    queryFn: () => getDetailsPdfList(id),
    enabled: !!id, 
  });
