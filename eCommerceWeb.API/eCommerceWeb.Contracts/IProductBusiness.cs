using System.Collections.Generic;
using eCommerceWeb.Entity;

namespace eCommerceWeb.Contracts
{
    public interface IProductBusiness
    {
        /// <summary>
        /// A method to save product
        /// </summary>
        /// <param name="product">Pass the category object</param>
        /// <returns>product</returns>
        /// 
        int AddProduct(Product product);

        Product DeleteProductById(int id);

        Product GetProductById(int id);

        List<Product> GetAllProducts();
    }
}
