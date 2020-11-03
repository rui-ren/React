using System.Collections.Generic;
using eCommerceWeb.Entity;

namespace eCommerceWeb.Contracts
{
    public interface IRepository
    {
        /// <summary>
        /// A method to save category
        /// </summary>
        /// <param name="category">Pass the category object</param>
        /// <returns>return status</returns>
        int AddCategory(Category category);

        Category GetCategoryById(int id);

        List<Category> GetAllCategories();

        int AddProduct(Product product);

        Product GetProductById(int id);

        List<Product> GetAllProducts();

        Product DeleteProductById(int id);

    }
}
