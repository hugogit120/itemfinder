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

    async buyProduct(productId) {
        const user = await this.api.patch(`/user/buys/${productId}`, {})
        return user
    }

    async getUserProducts() {
        const products = await this.api.get('/user/products')
        return products
    }

    async getOneProfile(id) {
        const oneProfile = await this.api.get(`/user/${id}`)
        return oneProfile.data
    }
    async getUserBuys() {
        const user = await this.api.get('/user/buys')
        return user
    }

    async addComment(question, productId) {
        const comment = {
            body: question,
        }
        const newComment = await this.api.post(`/comments/add/${productId}`, comment)
        return newComment.data
    }

    async answerComment(answer, commentId) {
        const comment = {
            answer,
        }
        const newComment = await this.api.patch(`/comments/${commentId}`, comment)
        return newComment.data
    }

}

const apiService = new ApiService()

export default apiService