document.addEventListener('DOMContentLoaded', function() {
});

window.onload = function() {
  var companiesLink = document.getElementById("nav-item-companies");
  var otherLinks = document.querySelectorAll(".nav-item a:not(#nav-item-companies)");

  otherLinks.forEach(function(link) {
    link.removeAttribute("default");
  });

  companiesLink.setAttribute("default", "");
};


document.getElementById('showMore').addEventListener('click', function() {
  const extraRows = document.querySelectorAll('.extra-row');
  const icon = this.querySelector('i');

  extraRows.forEach(row => {
    row.style.display = row.style.display === 'table-row' ? 'none' : 'table-row';
  });

  icon.style.transform = icon.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
});

document.getElementById('key-statistics-btn').addEventListener('click', function() {
  showSection('key-statistics');
});

document.getElementById('income-statement-btn').addEventListener('click', function() {
  showSection('income-statement');
});

document.getElementById('balance-sheet-btn').addEventListener('click', function() {
  showSection('balance-sheet');
});

document.getElementById('sector-valuation-btn').addEventListener('click', function() {
  showSection('sector-valuation');
});

function showSection(sectionId) {
  const sections = document.querySelectorAll('.table-section');
  sections.forEach(section => section.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');
}







document.querySelector('.fa-sort').addEventListener('click', function() {
  let cards = Array.from(document.querySelectorAll('.recent-research .col-md-6'));
  
  cards.sort((a, b) => {
    let titleA = a.querySelector('.card-header').textContent.trim().toUpperCase();
    let titleB = b.querySelector('.card-header').textContent.trim().toUpperCase();
    return titleA.localeCompare(titleB);
  });

  let recentResearchContainer = document.querySelector('.recent-research');
  recentResearchContainer.innerHTML = '';

  cards.forEach(card => {
    recentResearchContainer.appendChild(card);
  });
});

document.querySelector('.btn-search').addEventListener('click', function() {
  let searchTerm = document.querySelector('.form-control').value.toLowerCase();
  
  let cards = document.querySelectorAll('.recent-research .col-md-6');
  cards.forEach(card => {
    let cardText = card.textContent.toLowerCase();
    if (cardText.includes(searchTerm)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
});

document.querySelector('.form-control').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    document.querySelector('.btn-search').click();
  }
});


  const scrollContainer = document.querySelector('.recent-research');
  const progressBar = document.querySelector('.scroll-indicator');

  scrollContainer.addEventListener('scroll', () => {
    const scrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
    const scrolled = (scrollContainer.scrollTop / scrollHeight) * 100;
    progressBar.style.width = scrolled + '%';
  });

