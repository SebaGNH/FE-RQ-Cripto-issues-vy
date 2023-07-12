import axios from "axios";

export const githubApi = axios.create({
  baseURL:'https://api.github.com/repos/facebook/react',
  // si da error "bad credentials" comentar la línea "Authorization"
  headers: {
    Authorization: 'Bearer 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'
  }
})