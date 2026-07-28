export const dictionaries = {
  en: {
    app: {
      name: "StringLife",
      dashboard: "Dashboard",
      language: "Language"
    },
    dashboard: {
      title: "Instruments",
      subtitle: "Track strings, sessions, and playtime",
      addInstrument: "Add instrument",
      emptyTitle: "No instruments yet",
      emptyDescription: "Add your first instrument to start tracking."
    },
    instrument: {
      sessions: "Sessions",
      daysSinceReplacement: "days since replacement",
      stringChangeUnknown: "String change unknown",
      unknown: "Unknown",
      strings: "strings",
      edit: "Edit",
      delete: "Delete",
      deleteConfirm: "Delete this instrument?",
      start: "Start",
      stop: "Stop",
      totalPlaytime: "Total playtime",
      replacementStatus: "Replacement status",
      stringAge: "String age",
      days: "days",
      notes: "Notes",
      statuses: {
        unknown: "Unknown",
        fresh: "Fresh",
        soon: "Replace soon",
        overdue: "Overdue"
      }
    },
    instrumentForm: {
      titleNew: "Add Instrument",
      titleEdit: "Edit Instrument",
      name: "Name",
      type: "Type",
      stringCount: "String count",
      lastStringChangeDate: "Last string replacement",
      notes: "Notes",
      save: "Save instrument",
      error: "Could not save instrument.",
      types: {
        electric: "Electric",
        acoustic: "Acoustic",
        bass: "Bass",
        ukulele: "Ukulele"
      }
    },
    session: {
      total: "Total: ",
      startTime: "Start",
      endTime: "End",
      duration: "Duration",
      notes: "Notes",
      active: "Active",
      emptyScreen: "No sessions yet."
    }
  },
  ru: {
    app: {
      name: "StringLife",
      dashboard: "Инструменты",
      language: "Язык"
    },
    dashboard: {
      title: "Инструменты",
      subtitle: "Отслеживайте струны, занятия и время игры",
      addInstrument: "Добавить инструмент",
      emptyTitle: "Инструментов пока нет",
      emptyDescription: "Добавьте первый инструмент, чтобы начать учет."
    },
    instrument: {
      sessions: "Сессии",
      daysSinceReplacement: "дней с замены",
      stringChangeUnknown: "Дата замены неизвестна",
      unknown: "Неизвестно",
      strings: "струн",
      edit: "Редактировать",
      delete: "Удалить",
      deleteConfirm: "Удалить этот инструмент?",
      start: "Старт",
      stop: "Стоп",
      totalPlaytime: "Общее время игры",
      replacementStatus: "Статус замены струн",
      stringAge: "Возраст струн",
      days: "дней",
      notes: "Заметки",
      statuses: {
        unknown: "Неизвестно",
        fresh: "Свежие",
        soon: "Скоро заменить",
        overdue: "Пора заменить"
      }
    },
    instrumentForm: {
      titleNew: "Добавить инструмент",
      titleEdit: "Редактировать инструмент",
      name: "Название",
      type: "Тип",
      stringCount: "Количество струн",
      lastStringChangeDate: "Последняя замена струн",
      notes: "Заметки",
      save: "Сохранить инструмент",
      error: "Не удалось сохранить инструмент.",
      types: {
        electric: "Электрогитара",
        acoustic: "Акустическая гитара",
        bass: "Бас",
        ukulele: "Укулеле"
      }
    },
    session: {
      total: "Общее время: ",
      startTime: "Начало",
      endTime: "Конец",
      duration: "Длительность",
      notes: "Заметки",
      active: "Активна",
      emptyScreen: "Ещё нет сессий"
    }
  }
} as const;
