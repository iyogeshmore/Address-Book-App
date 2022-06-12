// <!-- UC-3 - Display person Details in Tabular Format usingTemplate Literals -->

window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {

const headerHtml =
    `<tr>
    <th>Fullname</th>
    <th>Address</th>
    <th>City</th>
    <th>State</th>
    <th>Zip Code</th>
    <th>Phone Number</th>
    <th>Actions</th>

    </tr>`;

const innerHtml = `${headerHtml}
<tr>
<td>Rajat Nikam</td>
<td>Old Goa</td>
<td>Goa</td>
<td> Maharashtra</td>
<td>403 001</td>
<td>91 8840044286</td>
<td>
<img onclick="remove(this)" alt="delete"src="../Assets/delete-black-18dp.svg">
<img onclick="update(this)" alt="edit" src="../Assets/create-black-18dp.svg"  >
</td>
</tr>

<tr>
<td>Akshar Hate</td>
<td>Kathivakkam</td>
<td>Chennai</td>
<td> Tamil Nadu</td>
<td>600 057</td>
<td>91 8087813812</td>
<td>
<img onclick="remove(this)" alt="delete"src="../Assets/delete-black-18dp.svg">
<img onclick="update(this)" alt="edit" src="../Assets/create-black-18dp.svg"  >
</td>
<tr>
    
<td>Yogesh More</td>
<td>Panvel</td>
<td>Mumbai</td>
<td> Maharashtra</td>
<td>410 206</td>
<td>91 8850055197</td>
<td>
    <img onclick="remove(this)" alt="delete"src="../Assets/delete-black-18dp.svg">
    <img onclick="update(this)" alt="edit" src="../Assets/create-black-18dp.svg"  >
    </td>
</tr>
        </td>
    </tr>`;
document.querySelector('#table-display').innerHTML = innerHtml;
}