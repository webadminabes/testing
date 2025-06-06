table = document.getElementsByClassName("table-content")[0];
// console.log(table);

const TableData = async () => {
  try {
    const resp = await fetch(
      "https://abes.platform.simplifii.com/api/v1/static/ie"
    );
    const response = await resp.json();
    TableDataArray = response.response.data;

    const table = document.getElementsByClassName("table-content")[0];

    TableDataArray.forEach((data) => {
      return (table.innerHTML += `
         <a
            target="/blank"
            href="${data.file}"
          >
          <span class="table-column-min-width"> ${data.title} </span>
            <span> ${data.date} </span>
            <span>
              <i class="fa fa-arrow-right"></i>
            </span>
          </a>`);
    });
  } catch (e) {
    // console.log(e);
  }
};
TableData();
