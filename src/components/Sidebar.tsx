import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar flex flex-col space-y-4">
      <ul className="flex flex-col items-start space-y-3">
        <li>
          <a
            href="https://www.youtube.com/@srminstituteofscienceandte1060"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity duration-300"
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKMAAACjCAYAAADmbK6AAAAAAXNSR0IArs4c6QAABX1JREFUeAHt3eFx00gYBmCXcB1cSqADroOjA+iA6yDXAXSQ64ASUkJ+MpezvDOSh8zlbKsEjlWiEHscwMFafbYfZjTCgVirZ1+v5F2tNJn4Q4AAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgIEk4A/lxzelGghOswAAAABJRU5ErkJggg=="
              alt="YouTube"
              className="w-10 h-10"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/srmisttrichy/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity duration-300"
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKMAAACjCAYAAADmbK6AAAAAAXNSR0IArs4c6QAACPdJREFUeAHtne1x2zgQhl1COjiXkA5yHeQ6SDpIOnA6yHWg6yAluAT/zFxsGDOkJp5zJLGEnJcSPTaNhQAIJEH6yYxGIU3i48GrJRZYgGdn/IMABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQgAAEJFN4H8zrvjet/AIvwAAAABJRU5ErkJggg=="
              alt="Instagram"
              className="w-10 h-10"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/srmist.trichy/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity duration-300"
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKMAAACjCAYAAADmbK6AAAAAAXNSR0IArs4c6QAACPdJREFUeAHtne1x2zgQhl1COjiXkA5yHeQ6SDpIOnA6yHWg6yAluAT/zFxsGDOkJp5zJLGEnJcSPTaNhQAIJEH6yYxGIU3i48GrJRZYgGdn/IMABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABBZO4H8xrtmet/AIvwAAAABJRU5ErkJggg=="
              alt="Facebook"
              className="w-10 h-10"
            />
          </a>
        </li>
        <li>
          <a
            href="https://x.com/srmist_trichy/status/1654449245783486469"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity duration-300"
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK..."
              alt="X (formerly Twitter)"
              className="w-10 h-10"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
