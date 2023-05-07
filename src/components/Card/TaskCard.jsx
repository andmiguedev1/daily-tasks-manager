import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faClock, faFlag } from "@fortawesome/free-solid-svg-icons";

import "./TaskCard.css";

function TaskCard() {
	return (
		<article className="task-card">
			<div className="card-container">
				<div className="task-details">
					<div>
						<div className="task-title">
							<h2>Build List Application</h2>
						</div>
						<FontAwesomeIcon
							title="remove"
							className="remove-task"
							icon={faTrashAlt}
						/>
					</div>
					<div className="task-content scroll">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eum
							quas non incidunt cumque porro mollitia magnam eius quos, ipsa, sunt
							nobis dolorem ipsum, placeat delectus ut veritatis officia aut.
						</p>
					</div>
				</div>
				<div className="task-details task-info">
					<div className="task-date">
						<FontAwesomeIcon icon={faClock} />
						<h4>07/05/2023</h4>
					</div>
					<div className="task-important">
						<FontAwesomeIcon icon={faFlag} />
					</div>
					<div className="task-finished"></div>
				</div>
			</div>
		</article>
	);
}

export default TaskCard;
