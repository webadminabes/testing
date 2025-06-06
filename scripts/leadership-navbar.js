var leadershipSeo = {
    "president-section": {
        "title": "President message ABES Engineering College Ghaziabad | Ranked 1 Engineering College in AKTU",
        "description": "We take pride in achieving our leadershipPageSection of being a preferred institution among the students by building their career path, thereby fulfilling our commitments of contributing in the welfare of country."
    },
    "vice-president-section": {
        "title": "Vice-presidents-message ABES Engineering College Ghaziabad | Ranked 1 Engineering College in AKTU",
        "description": "My dear students and educators from across the globe, I feel that the basic principle of transforming society is by transforming education. The whole world can be illuminated "
    },
    "director-section": {
        "title": "Directorsmesssage ABES Engineering College Ghaziabad | Ranked 1 Engineering College in AKTU",
        "description": "ABES Engineering College is one of the best college in NCR."
    },
    "deputy-director-section": {
        "title": "Dmessage ABES Engineering College Ghaziabad | Ranked 1 Engineering College in AKTU",
        "description": "ABES Engineering College is one of the best college in NCR."
    },
    "bog-section": {
        "title": "BOG || ABES Engineering College has academicians and industrialist of high repute on its prestigious Board of Governors consisting of following members",
        "description": "ABES Engineering College has academicians and industrialist of high repute on its prestigious Board of Governors consisting of following members"
    },
}

function leadershipMetaSwitch() {
    $(document).ready(function() {
        var leadershipPageSection = window.location.hash.split("#").pop();
        if (leadershipSeo.hasOwnProperty(leadershipPageSection)) {
            document.title = leadershipSeo[leadershipPageSection].title;
            document.querySelector('meta[name="description"]').setAttribute("content", leadershipSeo[leadershipPageSection].description);
        }
});
}

function leadershipMetaSwitchInternal(element) {
    var leadershipPageSection = element.getAttribute("href").split("#").pop();
        if (leadershipSeo.hasOwnProperty(leadershipPageSection)) {
            document.title = leadershipSeo[leadershipPageSection].title;
            document.querySelector('meta[name="description"]').setAttribute("content", leadershipSeo[leadershipPageSection].description);
        }
}