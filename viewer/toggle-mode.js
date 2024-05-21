(function ($) {
    $.fn.toggleSwitch = function () {
        return this.each(function () {
            const $toggleSwitch = $(this);
            const $slider = $toggleSwitch.find('.slider');
            const $modeIcon = $toggleSwitch.find('.mode-icon');
            const $sunIcon = $toggleSwitch.find('.sun-icon');
            const $moonIcon = $toggleSwitch.find('.moon-icon');
            const $contribuaSection = $('#contribua'); // seção contribua

            const updateUI = () => {
                const isChecked = $toggleSwitch.find('input[type="checkbox"]').prop('checked');
                const backgroundColor = isChecked ? '#f4f2ee' : '#3b3f7a';
                const bodyColor = isChecked ? '#f4f2ee' : '#050505';
                const textColor = isChecked ? '#000000' : '#ffffff'; // Cores do texto
                const iconPosition = isChecked ? '26px' : '0';

                $slider.css('background-color', backgroundColor);
                $('body').css('background-color', bodyColor);
                $modeIcon.css('transform', `translateX(${iconPosition})`);
                $sunIcon.toggleClass('visible', isChecked);
                $moonIcon.toggleClass('visible', !isChecked);
                $contribuaSection.css('color', textColor); // cor do texto seção contribua

                // Armazenamento local da seleção do usuário
                localStorage.setItem('isDarkMode', isChecked);
            };

            // Recuperar o estado do modo escuro do armazenamento local, se disponível
            const isDarkMode = localStorage.getItem('isDarkMode') === 'false';
            $toggleSwitch.find('input[type="checkbox"]').prop('checked', isDarkMode);

            updateUI(); // Inicialização

            $toggleSwitch.find('input[type="checkbox"]').on('change', updateUI);
            $toggleSwitch.find('input[type="checkbox"]').on('keydown', function (event) {
                if (event.key === 'Enter') {
                    $toggleSwitch.find('input[type="checkbox"]').trigger('change');
                }
            });
        });
    };

    
}(jQuery));

// Inicialize o botão no modo claro se não houver preferência armazenada no local storage
if (localStorage.getItem('isDarkMode') === null) {
    $('.toggle-switch input[type="checkbox"]').prop('checked', false);
}

$('.toggle-switch').toggleSwitch(); // Inicialize o plugin nas classes 'toggle-switch' em seu HTML
