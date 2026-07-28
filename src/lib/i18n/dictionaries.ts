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
      strings: "strings",
      edit: "Edit",
      delete: "Delete",
      start: "Start",
      stop: "Stop",
      totalPlaytime: "Total playtime",
      replacementStatus: "Replacement status",
      stringAge: "String age",
      days: "days",
      notes: "Notes"
    },
    instrumentForm: {
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
      emptyScreen: "No sessions yet.",
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
      strings: "струн",
      edit: "Редактировать",
      delete: "Удалить",
      start: "Старт",
      stop: "Стоп",
      totalPlaytime: "Общее время игры",
      replacementStatus: "Статус замены струн",
      stringAge: "Возраст струн",
      days: "дней",
      notes: "Заметки"
    },
    instrumentForm: {
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
      emptyScreen: "Ещё нет сессий",
    }
  }
} as const;
