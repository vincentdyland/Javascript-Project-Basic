showUI();

function showUI() {
  var main = document.querySelector(".main");
  main.innerHTML = `
  <div class="container">
  <div>
    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th>Product</th>
          <th>Description</th>
          <th>Quantity/Update</th>
          <th>Price</th>
          <th>Discount</th>
          <th>Tax</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src="./images/1.jpg" alt="" />
          </td>
          <td>
            MASSA AST <br />
            Color: black, Material: metal
          </td>
          <td>
            <input type="number" value="1" min="1" />
            <button class="btn" id="dec">-</button>
            <button class="btn" id="inc">+</button>
            <button class="btn btn-danger" id="remove">X</button>
          </td>

          <td>$120.00</td>
          <td>$25.00</td>
          <td>$15.00</td>
          <td>$110.00</td>
        </tr>
        <tr>
          <td>
            <img src="./images/15.jpg" alt="" />
          </td>
          <td>
            MASSA AST <br />
            Color: black, Material: metal
          </td>
          <td>
            <input type="number" value="1" min="1" />
            <button class="btn" id="dec">-</button>
            <button class="btn" id="inc">+</button>
            <button class="btn btn-danger" id="remove">X</button>
          </td>

          <td>$7.00</td>
          <td>--</td>
          <td>$1.00</td>
          <td>$8.00</td>
        </tr>
        <tr>
          <td>
            <img src="./images/2.jpg" alt="" />
          </td>
          <td>
            MASSA AST <br />
            Color: black, Material: metal
          </td>
          <td>
            <input type="number" value="1" min="1" />
            <button class="btn" id="dec">-</button>
            <button class="btn" id="inc">+</button>
            <button class="btn btn-danger" id="remove">X</button>
          </td>

          <td>$120.00</td>
          <td>$25.00</td>
          <td>$15.00</td>
          <td>$110.00</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="6">Total Price</td>
          <td id="sumTotal"></td>
        </tr>
        <tr>
          <td colspan="6">Total Discount</td>
          <td id="sumDiscount"></td>
        </tr>
        <tr>
          <td colspan="6">Total Tax</td>
          <td id="sumTax"></td>
        </tr>
      </tfoot>
    </table>
  </div>
</div>
  `;
  var tbody = document.querySelector("tbody");
  var trs = tbody.getElementsByTagName("tr");
  var inputs = tbody.getElementsByTagName("input");
  var sumOfTotal = document.getElementById("sumTotal");
  var sumDiscount = document.getElementById("sumDiscount");
  var sumTax = document.getElementById("sumTax");

  for (let i = 0; i < trs.length; i++) {
    const tr = trs[i];
    var btnDec = tr.querySelector("#dec");
    btnDec.addEventListener("click", function (e) {
      e.preventDefault();
      var input = inputs[i].value;
      if (input > 1) {
        input = parseInt(input) - 1;
        inputs[i].value = input;
        var price = tr.children[3];
        var discount = tr.children[4];
        var tax = tr.children[5];
        var total = tr.children[6];
        CountTotalProduct(price, discount, input, tax, total);
        ChangeSumOfTotal();
      }
    });

    var btnInc = tr.querySelector("#inc");
    btnInc.addEventListener("click", function (e) {
      e.preventDefault();
      var input = inputs[i].value;
      input = parseInt(input) + 1;
      inputs[i].value = input;
      var price = tr.children[3];
      var discount = tr.children[4];
      var tax = tr.children[5];
      var total = tr.children[6];
      CountTotalProduct(price, discount, input, tax, total);
      ChangeSumOfTotal();
    });

    var btnRemove = tr.querySelector("#remove");
    btnRemove.addEventListener("click", function (e) {
      e.preventDefault();
      if (confirm("Do you really wanna remove this product?")) {
        tbody.removeChild(tr);
        ChangeSumOfTotal();
      }
    });
  }

  function ChangeSumOfTotal() {
    sumOfTotal.innerHTML = "$0";
    sumTax.innerHTML = "$0";
    sumDiscount.innerHTML = "$0";
    for (let i = 0; i < trs.length; i++) {
      const tr = trs[i];
      var totalPrice = changeNumber(tr.children[6]);
      var tax = changeNumber(tr.children[5]);
      var discount = changeNumber(tr.children[4]);
      sumOfTotal.innerHTML =
        "$" +
        (parseFloat(totalPrice) + parseFloat(changeNumber(sumOfTotal))).toFixed(
          2
        );
      sumDiscount.innerHTML =
        "$" +
        (parseFloat(discount) + parseFloat(changeNumber(sumDiscount))).toFixed(
          2
        );
      sumTax.innerHTML =
        "$" + (parseFloat(tax) + parseFloat(changeNumber(sumTax))).toFixed(2);
    }
  }

  function changeNumber(input) {
    if (input.innerHTML == "--") {
      return 0;
    } else {
      return input.innerHTML.slice(1);
    }
  }

  function CountTotalProduct(price, discount, quantity, tax, total) {
    discount.innerHTML =
      "$" +
      Math.ceil(
        parseFloat(
          (parseFloat(quantity) * parseFloat(changeNumber(price)) * 20.83) / 100
        )
      ).toFixed(2);
    tax.innerHTML =
      "$" +
      Math.ceil(
        parseFloat(
          (parseFloat(quantity) * parseFloat(changeNumber(price)) * 12.5) / 100
        )
      ).toFixed(2);
    total.innerHTML =
      "$" +
      parseFloat(
        parseFloat(quantity) * parseFloat(changeNumber(price)) -
          parseFloat(changeNumber(discount)) +
          parseFloat(changeNumber(tax))
      ).toFixed(2);
  }

  ChangeSumOfTotal();
}
