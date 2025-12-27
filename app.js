document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('fullName').addEventListener('input', function(e) {
        document.getElementById('previewName').textContent = e.target.value || 'Your Name';
    });

    document.getElementById('email').addEventListener('input', updateContactInfo);
    document.getElementById('phone').addEventListener('input', updateContactInfo);
    document.getElementById('location').addEventListener('input', updateContactInfo);

    function updateContactInfo() {
        const email = document.getElementById('email').value || 'Email';
        const phone = document.getElementById('phone').value || 'Phone';
        const location = document.getElementById('location').value || 'Location';
        document.getElementById('contactInfo').textContent = `${email} | ${phone} | ${location}`;
    }

    document.getElementById('summary').addEventListener('input', function(e) {
        document.getElementById('previewSummary').textContent = e.target.value || 'Your professional summary will appear here';
    });

    document.getElementById('skills').addEventListener('input', function(e) {
        const skillsArray = e.target.value.split(',').map(s => s.trim()).filter(s => s);
        if (skillsArray.length > 0) {
            document.getElementById('previewSkills').innerHTML = skillsArray.map(skill => `<li>${skill}</li>`).join('');
        } else {
            document.getElementById('previewSkills').innerHTML = '<li>Add your skills</li>';
        }
    });

    document.getElementById('education').addEventListener('input', function(e) {
        const education = e.target.value || 'Your Education';
        document.getElementById('previewEducation').innerHTML = `<div class="education-item"><h4>${education}</h4></div>`;
    });

    document.getElementById('experience').addEventListener('input', function(e) {
        const experience = e.target.value || 'Your Experience';
        document.getElementById('previewExperience').innerHTML = `<div class="experience-item"><h4>${experience}</h4></div>`;
    });

});
