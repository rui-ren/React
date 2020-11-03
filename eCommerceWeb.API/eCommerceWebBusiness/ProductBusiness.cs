using System;
using System.Collections.Generic;
using eCommerceWeb.Contracts;
using System.Text;
using eCommerceWeb.Entity;

namespace eCommerceWeb.Business
{
    public class ProductBusiness : IProductBusiness
    {
        private readonly IRepository repository;

        public ProductBusiness(IRepository repository)
        {
            this.repository = repository;
        }

        public int AddProduct(Product product)
        {
            return this.repository.AddProduct(product);
        }

        public List<Product> GetAllProducts()
        {
            return this.repository.GetAllProducts();
        }

        public Product GetProductById(int id)
        {
            return this.repository.GetProductById(id);
        }

        public Product DeleteProductById(int id)
        {
            return this.repository.DeleteProductById(id);
        }

    }
}
