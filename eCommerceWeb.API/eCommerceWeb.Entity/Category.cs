using System.ComponentModel.DataAnnotations;


namespace eCommerceWeb.Entity
{
    public class Category
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public string Description { get; set; }
    }

    public class Product
    {
        [Key]
        public int Id { get; set; }

        public string NAME { get; set; }

        public int UnitPrice { get; set; }

        public string CategoryId { get; set; }

        public string Description { get; set; }


    }
}
