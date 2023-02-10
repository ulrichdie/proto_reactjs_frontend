/** @format */

// Hook des données d'authentification
import { useMutation } from "react-query";
import axios from "axios";

// Fonction d'authentification des utilisateurs
const authUser = (userData) => {
  return axios.post("url", userData);
};

export const useAuthentification = () => {
  //   const queryClient = useQueryClient();
  return useMutation(authUser, {
    onSuccess: () => {
      //   queryClient.invalidateQueries("query-name");
      // queryClient.setQueryData()
    },
  });
};
