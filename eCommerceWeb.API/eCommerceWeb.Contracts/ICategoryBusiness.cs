using System.Collections.Generic;
using eCommerceWeb.Entity;

namespace eCommerceWeb.Contracts
{
    public interface ICategoryBusiness
    {
        /// <summary>
        /// A method to save category
        /// </summary>
        /// <param name="category">Pass the category object</param>
        /// <returns>category</returns>
        int AddCategory(Category category);

        Category GetCategoryById(int id);

        List<Category> GetAllCategories();
    }
}

