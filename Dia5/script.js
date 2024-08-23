//product Management
fetch("Data.json")
    .then(Respuesta => Respuesta.json())
    .then(Data => {

        var Content = document.getElementById("Content")

        function BtnAgregar(){
            const BtnA = document.getElementById("Agregar");

            BtnA.addEventListener("click",(e)=>{
                Content.innerHTML="<label>Id <input id=Idnew> <label>Id <input id=Idnew>"
            })
        }
        function addProduct() {
            document.getElementById("Crud").addEventListener("submit",function(event){
                event.preventDefault();
            })
            Data[0]["products"].push({
                "id": 2,
                "name": names,
                "category": "Electronics",
                "price": 999.99,
                "quantityInStock": 50,
                "supplierId": 101
            })
            console.log(Data[0]["products"])
        };
        function viewProducts() {
            for (const i of Data[0]["products"]) {
                console.log(`Id: ${i["id"]} \n Name: ${i["name"]} \n Category: ${i["category"]} \n Price: ${i["price"]} \n QuantityinStock: ${i["quantityInStock"]} \n SupplierId: ${i["supplierId"]}`)
            }
        };
        function updateProduct(){
            let IdIdentifer=prompt("Ingrese la id del prducto que desea actualizar")
            let UpdateName=prompt("Ingrese el nuevo nombre")

            Data[0]["products"][IdIdentifer-1]["name"]=UpdateName

            console.log(Data)
        };
        function deleteProduct(){
            let IdIdentifer = prompt("Ingrese la id del producto que desea eliminar")

            Data[0]["products"].splice(IdIdentifer-1,1)

            console.log(Data[0]["products"])
        };
        BtnAgregar()
    });
