// exporta la funcion como módulo
module.exports = (temp, product) => {
  // reemplaza las etiquetas en la plantilla con valores y datos del producto
  let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(/{%FROM%}/g, product.from);
  output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
  output = output.replace(/{%QUANTITY%}/g, product.quantity);
  output = output.replace(/{%DESCRIPTION%}/g, product.description);
  output = output.replace(/{%ID%}/g, product.id);
  
  // condicional: si el producto no es orgánico, reemplaza por otra etiqueta
  if (!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
  
  // regresa la plantilla con los valores reemplazados
  return output;
}
