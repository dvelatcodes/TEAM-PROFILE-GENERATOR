const generateHTMLMain = (team) => {
  let html = [];
  //   manager
  //   manager
  const generateManager = (type) => {
    let manager = `
    <div class="card__container-card">
        <div class="card__container-card-head">
            <div class="name">${type.getName()}</div>
            <div class="role">Manager</div>
        </div>
        <div class="card__container-card-main">
            <div class="id">ID: ${type.getId()}</div>
            <div class="email">Email: <a href="mailto:${type.getEmail()}">${type.getEmail()}<a></div>
            <div class="other">Office number: ${type.getOfficeNumber()}</div>
        </div>
  </div>
        `;
    html.push(manager);
  };
  //   engineer
  //   engineer
  const generateEngineer = (type) => {
    let engineer = `
    <div class="card__container-card">
    <div class="card__container-card-head">
        <div class="name">${type.getName()}</div>
        <div class="role">Engineer</div>
    </div>
    <div class="card__container-card-main">
        <div class="id">ID: ${type.getId()}</div>
        <div class="email">Email: <a href="mailto:${type.getEmail()}">${type.getEmail()}<a></div>
        <div class="other">GitHub: <a href="${type.getGithubUsername()}">${type.getGithubUsername()}</a></div>
    </div>
</div>
        `;
    html.push(engineer);
  };
  //   intern
  //   intern
  const generateIntern = (type) => {
    let intern = `
    <div class="card__container-card">
    <div class="card__container-card-head">
        <div class="name">${type.getName()}</div>
        <div class="role">Intern</div>
    </div>
    <div class="card__container-card-main">
        <div class="id">ID: ${type.getId()}</div>
        <div class="email">Email: <a href="mailto:${type.getEmail()}">${type.getEmail()}<a></div>
        <div class="other">School: ${type.getSchool()}</div>
    </div>
</div>
        `;
    html.push(intern);
  };

  team.map((type) => {
    if (type.getRole() === "Manager") {
      generateManager(type);
    }
    if (type.getRole() === "Engineer") {
      generateEngineer(type);
    }
    if (type.getRole() === "Intern") {
      generateIntern(type);
    }
  });

  return html.join("");
};

const generateTeam = (team) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link rel="stylesheet" href="../template/style.css" />
    </head>
    <body>
      <header>
        <div class="head">My Team</div>
      </header>
      <main>
        <div class="card__container">
    ${generateHTMLMain(team)}
        </div>
        </main>
    </body>
    </html>
    `;
};

module.exports = generateTeam;
