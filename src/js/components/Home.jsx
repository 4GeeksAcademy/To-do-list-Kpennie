import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: inputValue.trim() }]);
      setInputValue('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        
        <h1 className="text-6xl font-thin text-gray-300 text-center mb-8 tracking-wider">
          todos
        </h1>
        
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg text-gray-600 mb-4 font-light">
              What needs to be done?
            </h2>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Add a new task..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          
          <div className="min-h-[200px]">
            {tasks.length === 0 ? (
              <div className="p-6 text-center text-gray-500 font-light">
                No tasks, add a task
              </div>
            ) : (
              <div>
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className="group flex items-center justify-between p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-gray-700 font-light">
                      {task.text}
                    </span>
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-red-100 rounded-full"
                    >
                      <X size={16} className="text-red-500" />
                    </button>
                  </div>
                ))}
                
                
                <div className="p-4 text-sm text-gray-500 font-light">
                  {tasks.length} item{tasks.length !== 1 ? 's' : ''} left
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

