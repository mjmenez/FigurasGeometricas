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
            //FiguraGeometrica figura
            //_figura = figura;
        }
        // GET: api/<FigurasGeometricasController>
       
       
        // POST api/<FigurasGeometricasController>
        [HttpPost("areacilindro/{radio:double}/{altura:double}")]
        public double AreaCilindro(double radio, double altura)
        {
           _figura = new Cilindro(radio,altura);
            return _figura.Area();
        }
        [HttpPost("volumencilindro/{radio:double}/{altura:double}")]
        public double VolumenCilindro(double radio, double altura)
        {
            _figura = new Cilindro(radio, altura);
            return _figura.Volumen();
        }

        [HttpPost("areaesfera/{radio:double}")]
        public double AreaEsfera(double radio)
        {
            _figura = new Esfera(radio);
            return _figura.Area();
        }
        [HttpPost("volumenesfera/{radio:double}")]
        public double VolumenEsfera(double radio, double altura)
        {
            _figura = new Esfera(radio);
            return _figura.Volumen();
        }
      
    }
}
