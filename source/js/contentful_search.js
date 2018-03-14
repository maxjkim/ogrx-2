$(function() {

    var findGetParameter = function(parameterName) {
        var result = null,
        tmp = [];
        location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
      });
        return result;
    }

    var search = function(v) {
        var p = findGetParameter('p');
        var limit = findGetParameter('limit');
        var open = findGetParameter('open');
        p = (p === null) ? '' : '&p=' + p;
        limit = (limit === null) ? '' : '&limit=' + limit;
        // open = (open === null) ? '' : '&open=' + open;


        // window.location.href = './all_sdk.html?q=' + v + limit + open;
        window.location.href = './all_sdk.html?q=' + v + limit;
    }

    $('#sdk-search').keypress(function (e) {
        if (e.which == 13) {
            e.preventDefault();
            search($(this).val());
            return false;
        }
    });

    $('#sdk-search-trigger').click(function (e) {
        e.preventDefault();
        search($('#sdk-search').val());
    });


    $('#sdk-clear-filter-btn').click(function (e) {
        window.location.href = './all_sdk.html';
    });

    if (findGetParameter('f') || findGetParameter('q')) {
        $('#sdk-clear-filter-btn').addClass('active')
    }

    $('#sdk-open-button').click(function (e) {
        var open = findGetParameter('open');
        var paramstring = '';

        var query = findGetParameter('q');
        var filter = findGetParameter('f');
        if (query !== null) {
            paramstring = '?q=' + encodeURIComponent(query);

            if (open != 'true') {
                paramstring += '&open=true';
            }
        }
        else if (filter == 'true' || filter == '1') {
            if (open != 'true') {
                paramstring += '?f=true&open=true';
            } else {
                paramstring = '?f=true';
            }
        }
        else {
            if (open != 'true') {
                paramstring += '?f=true&open=true';
            } else {
                paramstring = '?';
            }
        }


        var category = findGetParameter('category');
        var methodology = findGetParameter('methodology');
        var objective = findGetParameter('objective');
        var type = findGetParameter('type');
        category = (category === null) ? '' : '&category=' + encodeURIComponent(category);
        methodology = (methodology === null) ? '' : '&methodology=' + encodeURIComponent(methodology);
        objective = (objective === null) ? '' : '&objective=' + encodeURIComponent(objective);
        type = (type === null) ? '' : '&type=' + encodeURIComponent(type);
        window.location.href = './all_sdk.html' + paramstring + category + methodology + objective + type;
    });

    var open = findGetParameter('open');
    if (open == 'true') {
        $('#sdk-open-switch').prop('checked', true);
    } else {
        $('#sdk-open-switch').prop('checked', false);
    }


});