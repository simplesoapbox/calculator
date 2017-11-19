function clearAll(){
  $('#clientName').val('');
  $('#numMembers').val('');
  $('#websites').find('option').remove();
  $('#socialMedia').find('option').remove();
  clearRadios('newsletter');
  clearRadios('dataManagement');
  clearWebsites();
  clearNewsletter();
}

function clearWebsites(){
  $('#siteName').val('');
  clearRadios('designRadio');
  $("#apps").find("option:selected").prop("selected", false);
  $('#numPages').val('');
}

function clearNewsletter(){
  $('#numNewsletter').val('');
  $('#numEmailsMonth').val('');
  $("#newsletterAdditionalWork").find("option:selected").prop("selected", false);
}

function clearDataOptions(){
  $('#numMembers').val('');
}

function clearSocial(){
  $('#socialName').val('');
  clearRadios('socialCreation');
  clearRadios('socialManage');
}

function clearRadios(name){
  $("input:radio[name='" + name + "']").each(function(i){
    this.checked = false;
  });
}

var websites = [];
var socialMedia = {};

function cancelSiteAdd(){
  clearWebsites();
  $('#newSiteOptions').hide();
}

function showAddSiteOptions(){
  $('#newSiteOptions').show();
}

function addNewSite(){
  var website = {
    id: guid(),
    name: $('#siteName').val(),
    design: $('input[name=designRadio]:checked').val(),
    apps: $('#apps').val(),
    numPages: $('#numPages').val()
  };

  websites.push(website);
  addSites();
  clearWebsites();
  $('#newSiteOptions').hide();
}

function addSites(){
  $('#websites').find('option').remove();
  for (var index in websites) {
    addSiteAsOption(websites[ index ]);
  }
}

function addSiteAsOption(website){
  $('#websites').append($('<option>', {
    value: website.id,
    text: website.name
  }));
}

function editSite(){
  var siteToEdit;
  var selectedSite = $('#websites option:selected').val();
  if (selectedSite) {
    for (var index in websites) {
      if (websites[ index ].id === selectedSite) {
        siteToEdit = websites[ index ];
      }
    }
  }
  if (siteToEdit) {
    showAddSiteOptions();
    populateSiteForm(siteToEdit);
  }
}

function populateSiteForm(site){
  $('#siteName').val(site.name);
  $("input[name=designRadio][value=" + site.design + "]").prop('checked', true);
  for (var index in site.apps) {
    $('#apps').find('option[value=' + site.apps[ index ] + ']').prop('selected', true);
  }
  $('#numPages').val(site.numPages);

}

function deleteSite(){
  var siteToDelete;
  var selectedSite = $('#websites option:selected').val();
  if (selectedSite) {
    for (var index in websites) {
      if (websites[ index ].id === selectedSite) {
        siteToDelete = websites[ index ];
        websites.splice(index, 1);

      }
    }
  }
  if (siteToDelete) {
    $("#websites").find("option[value=" + selectedSite + "]").remove();
  }
  clearWebsites();
  $('#newSiteOptions').hide();
}

function showNewsletterOptions(check){
  if (check) {
    $('#newsletterOptions').show();
  }
  else {
    $('#newsletterOptions').hide();
    clearNewsletter();
  }
}

function hideNewsletterOptions(){
  $('#newsletterOptions').hide();
}

function showDataOptions(check){
  if (check) {
    $('#dataOptions').show();
  }
  else {
    $('#dataOptions').hide();
    clearDataOptions();
  }
}

function showSocialOptions(){
  $('#socialOptions').show();
}

function cancelSocialAdd(){
  $('#socialOptions').hide();
  clearSocial();
}

function addNewSocial(){

}

function guid(){
  function s4(){
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}