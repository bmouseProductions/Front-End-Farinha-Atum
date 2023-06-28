import axios from "axios"

export const api = axios.create({
    baseURL: "https://backend-farinhas-patense.onrender.com"
})

interface propsFormData {
    nome: string;
    telefone: string;
    email: string;
    mensagem: string;
    propostaFile: File | null;
    propostaName: string;
}

export const enviarEmail = async (formData:propsFormData) => {
    const {nome, telefone, email, mensagem, propostaFile, propostaName} = formData

    const formDataToSend = new FormData();
    formDataToSend.append("nome", nome);
    formDataToSend.append("telefone", telefone);
    formDataToSend.append("email", email);
    formDataToSend.append("mensagem", mensagem);

    if(propostaFile){
        formDataToSend.append("propostaFile", propostaFile, propostaName)
    }

    return await api.post("/send", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });

}