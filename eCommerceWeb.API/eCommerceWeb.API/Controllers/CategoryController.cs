using eCommerceWeb.Entity;
using eCommerceWeb.Contracts;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Net;

namespace eCommerceWeb.API.Controllers
{
    [Route("api/eCommerce")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryBusiness categoryBusiness;

        public CategoryController(ICategoryBusiness categoryBusiness)
        {
            this.categoryBusiness = categoryBusiness;
        }

        /// <summary>
        /// Endpoint for testing API
        /// </summary>
        /// <returns></returns>

        [HttpGet]
        [Route("categories")]
        [ProducesResponseType((int) HttpStatusCode.OK)]
        public ActionResult<List<Category>> GetCategories()
        {
            var categories = this.categoryBusiness.GetAllCategories();
            return Ok(categories);
        }

        /// <summary>
        /// Query the endpoint here
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("categories/{id}")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        public ActionResult<List<Category>> GetCategoryById(int id)
        {
            var category = this.categoryBusiness.GetCategoryById(id);
            if (category == null)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError);
            }
            return Ok(category);
        }

        /// <summary>
        /// Save a new category
        /// </summary>
        /// <param name="category">Given a category</param>
        /// <returns>Returns Id of category created</returns>

        [HttpPost]
        [Route("categories")]
        public ActionResult<int> SaveCategory(Category category)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Invalid input");
            }
            var response = this.categoryBusiness.AddCategory(category);
            return Ok(response);
        }
    }
}
