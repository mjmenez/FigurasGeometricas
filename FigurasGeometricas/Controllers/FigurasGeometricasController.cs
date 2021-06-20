using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Servicios.Figuras;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860
 
namespace FigurasGeometricas.Controllers
{
    [Route("api/figurasgeometrica")]
    [ApiController]
    public class FigurasGeometricasController : ControllerBase
    {
        private  FiguraGeometrica _figura;
        public FigurasGeometricasController()
        {
        }
        /// <summary>
        /// Obtiene el area de un cilindro, dado el radio y la altura
        /// </summary>
        /// <param name="radio"></param>
        /// <param name="altura"></param>
        /// <returns> regresa el area del cilindro</returns>
        [HttpPost("areacilindro/{radio:double}/{altura:double}")]
        public double AreaCilindro(double radio, double altura)
        {
           _figura = new Cilindro(radio,altura);
            return _figura.Area();
        }
        /// <summary>
        /// Obtiene el volumen de un cilindro, dado el radio y la altura
        /// </summary>
        /// <param name="radio"></param>
        /// <param name="altura"></param>
        /// <returns>regresa el volumen del cilindro</returns>
        [HttpPost("volumencilindro/{radio:double}/{altura:double}")]
        public double VolumenCilindro(double radio, double altura)
        {
            _figura = new Cilindro(radio, altura);
            return _figura.Volumen();
        }
        /// <summary>
        /// Obtiene el area de una esfera, dado el radio 
        /// </summary>
        /// <param name="radio"></param>
        /// <returns>regresa el area de la esfera </returns>
        [HttpPost("areaesfera/{radio:double}")]
        public double AreaEsfera(double radio)
        {
            _figura = new Esfera(radio);
            return _figura.Area();
        }
        /// <summary>
        /// Obtiene el volumen de una esfera, dado el radio 
        /// </summary>
        /// <param name="radio"></param>
        /// <param name="altura"></param>
        /// <returns>regresa el volumen de la esfera</returns>
        [HttpPost("volumenesfera/{radio:double}")]
        public double VolumenEsfera(double radio, double altura)
        {
            _figura = new Esfera(radio);
            return _figura.Volumen();
        }
      
    }
}
