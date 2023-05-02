# Тестовое задание

На момент деплоя на бесплатной api осталось 77 запросов. Если вдруг чего - замените `apikey` в `src\app\exchange-rates\services\exchange-api.service.ts`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Комментарии

По заданию нужно изначально отслаживать следующие валюты: USD, EUR, GBR, но GBR нет в api и он был заменен на CAD.

Api дает возможность запросить весь список поддерживаемых валют. Согласно требованию нужно сделать возможность добавлять только 3 определенные валюты, но я бы отразил все.

За 5 секунд курс валюты не сильно меняется, так что разница не всегда наблюдается. Плюс ко всему с сервиса возвращается отношение target к source (USD к RUB) и на возведение в отрицательную степень я могу терять инфу.

В качестве доп. библиотеки использовал TaigaUI. Не очень разумно было подключать ее всю ради пары элементов, но больше не меньше =)

Задание слишком простое, чтобы делать адаптивную верстку. А реализовывать функциональность, которая бы не смотрелась как 5-ая нога, чтобы появилась причина делать адаптивную верстку, я не стал. В качестве доп нагрузки - все линтеры, кроме линтера на стили.
