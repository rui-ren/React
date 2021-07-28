using eCommerceWeb.Contracts;
using eCommerceWeb.Entity;
using Microsoft.Extensions.Configuration;
using System.Net;
using System.Collections.Generic;
using System.Linq;
using System.Text;


namespace eCommerceWeb.DataAccess
{
    public class Repository : IRepository
    {
        private readonly ECommerceDbContext eCommerceDbContext;
        
        public Repository(IConfiguration configuration)
        {
            eCommerceDbContext = new ECommerceDbContext(configuration);
        }

        public int AddCategory(Category category)
        {
            this.eCommerceDbContext.Categories.Add(category);
            this.eCommerceDbContext.SaveChanges();
            return category.Id;
        }

        public int AddProduct(Product product)
        {
            this.eCommerceDbContext.Products.Add(product);
            this.eCommerceDbContext.SaveChanges();
            return product.Id;
        }

        public Product DeleteProductById(int id)
        {

            var product = this.eCommerceDbContext.Products.FirstOrDefault(c => c.Id == id);
            this.eCommerceDbContext.Products.Remove(product);
            this.eCommerceDbContext.SaveChanges();
            return product;
        }

        public List<Category> GetAllCategories()
        {
            return this.eCommerceDbContext.Categories.ToList();
        }

        public List<Product> GetAllProducts()
        {
            return this.eCommerceDbContext.Products.ToList();
        }

        public Category GetCategoryById(int id)
        {
            return this.eCommerceDbContext.Categories.FirstOrDefault(c => c.Id == id);
        }

        public Product GetProductById(int id)
        {
            return this.eCommerceDbContext.Products.FirstOrDefault(c => c.Id == id);
        }
    }
}
