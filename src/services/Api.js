import axios from 'axios'

class ApiService {

    constructor() {
        this.api = axios.create(
            {
                baseURL: "http://localhost:4000",
                withCredentials: true
            }
        )
    }
    async getAllProducts() {
        const allProducts = await this.api.get("/products")
        return allProducts
    }
    async getOneProduct(productId) {
        const oneProduct = await this.api.get(`/products/${productId}`)
        return oneProduct
    }
    async createProduct(product) {
        const { title, image, description, price, category } = product
        const oneProduct = await this.api.post('/products', { title, image, description, price, category })
        return oneProduct
    }
    async editProduct(product, productId) {
        const { title, image, description, price, category } = product
        const oneProduct = await this.api.put(`/products/${productId}`, { title, image, description, price, category })
        return oneProduct
    }

    async addComment(question, productId) {
        console.log(question)
        const comment = {
            body: question,
        }
        const newComment = await this.api.post(`/comments/add/${productId}`, comment)
        return newComment
    }

}

const apiService = new ApiService()

export default apiService