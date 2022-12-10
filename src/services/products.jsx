
const PRODUCTS_LIST = [
    {
        id : 1,
        category : "freeskates",
        name : "Powerslide Next 110",
        price : '$'+120000,
        img : "./next110.jpg",
        detail: "Bota: Trinity de polipropileno y plástico reforzado con fibra de vidrio - Botín: Termomoldeable MY FIT Fat Boy Dual Fit – Chasis: Elite Trinity de aluminio 3x110mm  – Ruedas: Spinner 110mm / 88a Bullet (perfil afilado)– Rodamientos: Wicked Abec 9 – Cierres: Buckle en caña, Micrométrico en empeine y Cordones"
    },
    
    {
        id : 2,
        category : "freeskates",
        name : "Rollerblade Twister XT SE",
        price : '$'+132000,
        img : "./twisterXT.jpg",
        detail: "– Bota: De fibra de carbono, con strap, cierre micrométrico, cordones y protector lateral reemplazable, termomoldeable de una sola pieza Frame: Powerslide Nexus rockeable (de aluminio aeronáutico 6061) de 205mm/215mm/225mm/235mm (según el talle) Ruedas:Undercover (by Matter)Team 90mm 88A con rulemanes Wicked ILQ 9 Classic"

    },
    {
        id : 3,
        category : "aggressive",
        name : "USD Aeon 60",
        price : '$'+92500,
        img : "./aeon60.jpg",
        detail: "Bota: De nylon reforzada con fibra de vidrio, con strap, cierre microm{etrico, cordones y protector lateral reemplazable Liner: MyFit FatBoy termomoldeable con puntera de neoprene que se amolda al pié Frame: Powerslide Gamma 243mm para ruedas de hasta 80mm (anclaje 165mm)"

    },
    
    {
        id : 4,
        category : "aggressive",
        name : "Roces M12",
        price : '$'+105000,
        img : "./rocesm12.jpg",
        detail: "La bota rigida otorga una excelente contencion del tobillo, cuenta con dos straps micrometricos para un ajuste preciso y comodo, El frame es de aluminio de una sola pieza, ofreciendo mayor respuesta y resistencia, rulemanes abec 7 y ruedas 80MM 85A."

    },
    {
        id : 5,
        category : "fitness",
        name : "Powerslide Swell 110",
        price : '$'+87000,
        img : "./swell.jpg",
        detail: "Se pueden sintetizar en siete las características principales de estos patines: comodidad, maniobrabilidad, velocidad, control, centro de gravedad bajo, buena transferencia y gran durabilidad"
    },
    {
        id : 6,
        category : "fitness",
        name : "Rollerblade Macroblade",
        price : '$'+62500,
        img : "./macroblade.jpg",
        detail: "PATINES DE ALTO RENDIMIENTO para los entusiastas del fitness que desean un poco más de soporte lateral para la estabilidad mientras buscan entrenar, hacer ejercicio o patinar más rápido."

    },
    {
        id : 7,
        category : "freeskates",
        name : "Powerslide Next Black 80",
        price : '$'+114000,
        img : "./next80.jpg",
        detail: "Guía: Aluminio fundido Elite. 243 mm / 4x80 (hasta talla 43); 275 mm / 4x90 mm (a partir de la talla 44). - Ruedas: Spinner 80mm / 88A. - Rodamientos: Wicked ABEC 9."

    },
    {
        id : 8,
        category : "freeskates",
        name : "Seba FR1 80 Light Blue",
        price : '$'+14200,
        img : "./sebafr1.jpg",
        detail: "Energy plates de 7 agujeros. - Cierre: cierres superiores de metal, correas dobles, cordones estándar. - Botín: desmontables con amortiguadores extraíbles. - Guías: 4D 243mm."

    },
  
];

export function GetProducts(category){
return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (category === undefined){
            resolve(PRODUCTS_LIST);
        }else{
            const PRODUCTS = PRODUCTS_LIST.filter(prod => prod.category === category);
            resolve(PRODUCTS);
        }
    }, 3500);
});
}

