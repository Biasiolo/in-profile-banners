(function ($) {
    $.fn.toggleSwitch = function () {
        return this.each(function () {
            const $toggleSwitch = $(this);
            const $slider = $toggleSwitch.find('.slider');
            const $modeIcon = $toggleSwitch.find('.mode-icon');
            const $sunIcon = $toggleSwitch.find('.sun-icon');
            const $moonIcon = $toggleSwitch.find('.moon-icon');
            const $contribuaSection = $('#contribua'); // Adicionado para selecionar a seção contribua

            const updateUI = () => {
                const isChecked = $toggleSwitch.find('input[type="checkbox"]').prop('checked');
                const backgroundColor = isChecked ? '#f5f382' : '#022950';
                const bodyColor = isChecked ? '#f4f2ee' : '#050505';
                const textColor = isChecked ? '#000000' : '#ffffff'; // Cores do texto
                const iconPosition = isChecked ? '26px' : '0';

                $slider.css('background-color', backgroundColor);
                $('body').css('background-color', bodyColor);
                $modeIcon.css('transform', `translateX(${iconPosition})`);
                $sunIcon.toggleClass('visible', isChecked);
                $moonIcon.toggleClass('visible', !isChecked);
                $contribuaSection.css('color', textColor); // Aplica a cor do texto à seção contribua
            };

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

$('.toggle-switch').toggleSwitch(); // Inicialize o plugin nas classes 'toggle-switch' em seu HTML
