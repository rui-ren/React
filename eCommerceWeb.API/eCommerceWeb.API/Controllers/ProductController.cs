using eCommerceWeb.Entity;
using eCommerceWeb.Contracts;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Net;

namespace eCommerceWeb.API.Controllers
{
    [Route("api/eCommerce")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductBusiness productBusiness;

        public ProductController(IProductBusiness productBusiness)
        {
            this.productBusiness = productBusiness;
        }

        ///<summary>
        /// Endpoint for test API Product
        /// </summary>
        
        [HttpGet]
        [Route("products")]
        [ProducesResponseType((int) HttpStatusCode.OK)]

        public ActionResult<List<Product>> GetProducts()
        {
            var products = this.productBusiness.GetAllProducts();
            return Ok(products);
        }

        ///<summary>
        ///Query the endpoint for products
        /// </summary>
        
        [HttpGet]
        [Route("products/{id}")]
        [ProducesResponseType((int)HttpStatusCode.OK)]

        public ActionResult<List<Product>> GetProductById(int id)
        {
            var product = this.productBusiness.GetProductById(id);
            if (product == null)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError);
            }
            return Ok(product);
        }

        [HttpPost]
        [Route("products")]
        public ActionResult<int> SaveProduct(Product product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Invalid input");
            }
            var response = this.productBusiness.AddProduct(product);
            return Ok(response);
        }

        [HttpDelete]
        [Route("products")]
        public ActionResult<int> DeleteProduct(int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Invalid input");
            }
            var response = this.productBusiness.DeleteProductById(id);
            return Ok(response);
        }

    }
}

