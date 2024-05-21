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

$('.toggle-switch input[type="checkbox"]').prop('checked', true); // botão no modo claro
$('.toggle-switch').toggleSwitch(); 
