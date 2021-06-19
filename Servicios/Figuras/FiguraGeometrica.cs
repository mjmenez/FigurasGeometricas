using System;
using System.Collections.Generic;
using System.Text;

namespace Servicios.Figuras
{
    /// <summary>
    /// clase base para las figuras geometricas
    /// </summary>
    public abstract class FiguraGeometrica
    {
        public abstract double Area();
        public abstract double Volumen();
    }

    public class Cilindro : FiguraGeometrica
    {
        private double _radio { get; set; }
        private double _altura { get; set; }
        const double pi = 3.1416;
        public Cilindro(double radio, double altura)
        {
            _radio = radio;
            _altura = altura;
        }

        public override double Area()
        {
            return 2 * pi * _radio * (_radio + _altura);
        }
        /// <summary>
        /// Regresa el volumen
        /// </summary>
        /// <returns></returns>
        public override double Volumen()
        {
            return pi * (_radio * _radio) * _altura;
        }

    }

    public class Esfera : FiguraGeometrica
    {
        private double _radio { get; set; }
        const double pi = 3.1416;
        public Esfera(double radio)
        {
            _radio = radio;
        }
        public override double Area()
        {
            return 4 * pi * (_radio * _radio);
        }
        /// <summary>
        /// Regresa el volumen
        /// </summary>
        /// <returns></returns>
        public override double Volumen()
        {
            return (4/3)*pi * (_radio * _radio * _radio);
        }

    }
}
