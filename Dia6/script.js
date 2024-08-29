//product Management
fetch("Data.json")
    .then(Respuesta => Respuesta.json())
    .then(Data => {

        function addTable() {
            const Table = document.querySelector("#Table tbody");
            Table.innerHTML = ""

            Data[0].products.forEach(Datos => {
                const row = document.createElement("tr");

                row.innerHTML += `<td>${Datos.id}</td> <td>${Datos.name}</td> <td>${Datos.category}</td> <td>${Datos.price}</td> <td>${Datos.quantityInStock}</td> <td>${Datos.supplierId}</td> <td><button id=DeleteProduct${Datos.id}>Delete</button><button id=EditB${Datos.id}>Edit</button></td><div id=editss></div>`;
                Table.appendChild(row);

                const DeleteButton = document.getElementById(`DeleteProduct${Datos.id}`);

                DeleteButton.addEventListener("click", (e) => {
                    deleteProduct(Datos.id)
                });
                const EditButton = document.getElementById(`EditB${Datos.id}`);

                EditButton.addEventListener("click", (e) => {
                    updateProduct(Datos.id)
                })
            });
        };
        function updateProduct(id) {
            let Edit = Data[0].products.filter(Object => Object.id == id)
            const EditC = document.getElementById("editss");
            console.log(Edit)

            EditC.innerHTML = `<form id="UpdateProducts">
                Id:
                <input type="number" id="IdU" value=${Edit[0].id}>
                Name:
                <input type="text" value=${Edit[0].name} id="NameU">
                Category:
                <select name="Category" id="CategoryU">
                    <option value="Electronics">Electronics</option>
                    <option value="Mechanical">Mechanical</option>
                </select>
                Price:
                <input type="number" name="Price" id="PriceU" value=${Edit[0].price}>
                QuantityStock:
                <input type="number" id="QuantityStockU" value=${Edit[0].quantityInStock}>
                <button type="submit">Guardar</button>
            </form>`

            document.getElementById("UpdateProducts").addEventListener("submit", function (event) {
                event.preventDefault();

                let IdP = parseInt(document.getElementById("IdU").value);
                let Name = document.getElementById("NameU").value;
                let Category = document.getElementById("CategoryU").value;
                let Price = document.getElementById("PriceU").value;
                let QuantityStock = document.getElementById("QuantityStockU").value;

                Edit[0].id = IdP
                Edit[0].name = Name
                Edit[0].category = Category
                Edit[0].price = Price
                Edit[0].quantityInStock = QuantityStock
                addTable()
                EditC.innerHTML = ""
            });
        };

        function deleteProduct(id) {
            Data[0].products = Data[0].products.filter(Object => Object.id !== id);
            addTable()
        };

        function addProduct() {
            document.getElementById("AddProducts").addEventListener("submit", function (event) {
                event.preventDefault();

                let IdP = parseInt(document.getElementById("Id").value);
                let Name = document.getElementById("Name").value;
                let Category = document.getElementById("Category").value;
                let Price = document.getElementById("Price").value;
                let QuantityStock = document.getElementById("QuantityStock").value;

                Data[0]["products"].push({
                    "id": IdP,
                    "name": Name,
                    "category": Category,
                    "price": Price,
                    "quantityInStock": QuantityStock,
                    "supplierId": 101
                });
                console.log(Data[0]["products"])
                addTable();
            });
        };

        addTable()
        addProduct()

        //Supplier Managament

        function AddTableS() {
            const TableS = document.querySelector("#TableS tbody");
            TableS.innerHTML = ""

            Data[0].suppliers.forEach(DatosS => {
                const rowS = document.createElement("tr");

                rowS.innerHTML += `<td>${DatosS.id}</td> <td>${DatosS.name}</td> <td>${DatosS.contactInfo.phone}</td> <td>${DatosS.contactInfo.email}</td> <td>${DatosS.contactInfo.address}</td> <td><button id=DeleteProductS${DatosS.id}>Delete</button><button id=EditB${DatosS.id}>Edit</button></td><div id=editssS></div>`
                TableS.appendChild(rowS);

                const DeleteButtonS = document.getElementById(`DeleteProductS${DatosS.id}`);
                DeleteButtonS.addEventListener("click", (e) => {
                    deleteSupplier(DatosS.id)
                });
                const EditButtonS = document.getElementById(`EditB${DatosS.id}`);

                EditButtonS.addEventListener("click", (e) => {
                    updateSupplier(DatosS.id)
                });

            });
        };

        function updateSupplier(id) {
            let Edit = Data[0].suppliers.filter(Object => Object.id == id)
            const EditC = document.getElementById("editssS");

            EditC.innerHTML = `<form id="UpdateSuppliers">
                Id:
                <input type="number" value=${Edit[0].id} id="IdSU">
                Name:
                <input type="text"value=${Edit[0].name}  id="NameSU">
                Coctact:
                <input type="number" id="NumberPhoneU" value=${Edit[0].contactInfo.phone}>
                <input type="email" id="EmailU" value=${Edit[0].contactInfo.email}>
                <input type="text" id="AddressU" value=${Edit[0].contactInfo.address}>
                <button type="submit">Guardar</button>
            </form>`

            document.getElementById("UpdateSuppliers").addEventListener("submit",function(event){
                event.preventDefault();

                let IdS = document.getElementById("IdSU").value;
                let NameS = document.getElementById("NameSU").value;
                let NumberS = document.getElementById("NumberPhoneU").value;
                let EmailS = document.getElementById("EmailU").value;
                let Address = document.getElementById("AddressU").value;

                Edit[0].id = IdS;
                Edit[0].name = NameS;
                Edit[0].contactInfo.phone = NumberS;
                Edit[0].contactInfo.EmailS = EmailS;
                Edit[0].contactInfo.address = Address;

                AddTableS()
                EditC.innerHTML = ""
            });
        };

        function deleteSupplier(id) {
            Data[0].suppliers = Data[0].suppliers.filter(Object => Object.id !== id);
            AddTableS()
        };

        function addSupplier() {
            document.getElementById("AddSuppliers").addEventListener("submit", function (event) {
                event.preventDefault();

                let IdS = document.getElementById("IdS").value;
                let NameS = document.getElementById("NameS").value;
                let NumberS = document.getElementById("NumberPhone").value;
                let EmailS = document.getElementById("Email").value;
                let Address = document.getElementById("Address").value;

                Data[0]["suppliers"].push({
                    "id": IdS,
                    "name": NameS,
                    "contactInfo": {
                        "phone": NumberS,
                        "email": EmailS,
                        "address": Address
                    }
                });
                AddTableS()
            });
        };
        AddTableS()
        addSupplier()

        //Order Management

        function viewOrders() {
            const TableO = document.querySelector("#TableO tbody");
            TableO.innerHTML = ""

            Data[0].orders.forEach(DatosO => {
                const rowO = document.createElement("tr");

                rowO.innerHTML += `<td>${DatosO.orderId}</td> <td>${DatosO.productId}</td> <td>${DatosO.quantity}</td> <td>${DatosO.orderDate}</td> <td>${DatosO.status}</td> <td><button id=DeleteProductO${DatosO.orderId}>Delete</button><button id=EditB${DatosO.orderId}>Edit</button></td><div id=editssO></div>`;
                TableO.appendChild(rowO);

                const DeleteButtonO = document.getElementById(`DeleteProductO${DatosO.orderId}`);
                DeleteButtonO.addEventListener("click", (e) => {
                    deleteOrder(DatosO.orderId)
                });
                const EditButtonO = document.getElementById(`EditB${DatosO.orderId}`);
                EditButtonO.addEventListener("click",(e)=>{
                    UpdateOrder(DatosO.orderId)
                });
            });
        };

        function deleteOrder(id) {
            Data[0].orders = Data[0].orders.filter(Object => Object.orderId !== id);
            viewOrders()
        };

        function UpdateOrder(id){
            let Edit = Data[0].orders.filter(Object => Object.orderId == id)
            const EditC = document.getElementById("editssO");
            console.log(Edit)

            EditC.innerHTML = `<form id="UpdateOrder"> 
                Id:
                <input type="number" value=${Edit[0].orderId} id="IdOU">
                ProductID:
                <input type="number" value=${Edit[0].productId} id="ProductIDU">
                Quantity:
                <input type="number" id="QuantityU" value=${Edit[0].quantity}>
                <button type="submit">Guardar</button>
            </form>`;
            
            document.getElementById("UpdateOrder").addEventListener("submit", function (event) {
                event.preventDefault();

                let IdU = document.getElementById("IdOU").value;
                let ProductIDu = document.getElementById("ProductIDU").value;
                let QuantityU = document.getElementById("QuantityU").value;

                Edit[0].orderId = IdU
                Edit[0].productId = ProductIDu
                Edit[0].productId = QuantityU

                viewOrders()
                EditC.innerHTML = ""
            });
        }

        function addOrder() {
            document.getElementById("AddOrders").addEventListener("submit", function (event) {
                event.preventDefault()

                let OrderID = document.getElementById("IdO").value;
                let productID = document.getElementById("ProductID").value;
                let Quantity = document.getElementById("Quantity").value;
                const f = new Date();

                Data[0]["orders"].push({
                    "orderId": OrderID,
                    "productId": productID,
                    "quantity": Quantity,
                    "orderDate": f.toLocaleDateString(),
                    "status": "Delivered"
                });
                viewOrders();
            });
        }
        viewOrders()
        addOrder()

    });
