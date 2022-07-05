var matrix = [[0,0,0,0,0,4,0,0,0,3,0,0,3,0,0,0,0,0,0,0,0,0,2,4,0,5,0,0],[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,4,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,6,7,0],[0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0],[0,0,0,0,0,0,3,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,4,6,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0],[1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0],[0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0],[0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0],[0,0,0,0,0,2,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,2,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],[0,1,3,0,0,3,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0],[0,0,3,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,2,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,4,1,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,2,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0]]
var packages = [{
"name": " org.eclipse.cargotracker.interfaces.booking.facade.internal.assembler", "color": " #3182bd"
}
,{
"name": " org.eclipse.cargotracker.domain.service", "color": " #6baed6"
}
,{
"name": " org.eclipse.cargotracker.application", "color": " #9ecae1"
}
,{
"name": " org.eclipse.cargotracker.interfaces.booking.web", "color": " #c6dbef"
}
,{
"name": " org.eclipse.cargotracker.interfaces.handling", "color": " #e6550d"
}
,{
"name": " org.eclipse.cargotracker.domain.model.cargo", "color": " #fd8d3c"
}
,{
"name": " org.eclipse.cargotracker.domain.shared", "color": " #fdae6b"
}
,{
"name": " org.eclipse.cargotracker.infrastructure.logging", "color": " #fdd0a2"
}
,{
"name": " org.eclipse.pathfinder.api", "color": " #31a354"
}
,{
"name": " org.eclipse.cargotracker.domain.model.voyage", "color": " #74c476"
}
,{
"name": " org.eclipse.cargotracker.interfaces.booking.facade.internal", "color": " #a1d99b"
}
,{
"name": " org.eclipse.cargotracker.interfaces.handling.file", "color": " #c7e9c0"
}
,{
"name": " org.eclipse.cargotracker.application.util", "color": " #756bb1"
}
,{
"name": " org.eclipse.cargotracker.interfaces.tracking.web", "color": " #9e9ac8"
}
,{
"name": " org.eclipse.cargotracker.interfaces", "color": " #bcbddc"
}
,{
"name": " org.eclipse.cargotracker.application.internal", "color": " #dadaeb"
}
,{
"name": " org.eclipse.cargotracker.infrastructure.messaging.jms", "color": " #636363"
}
,{
"name": " org.eclipse.cargotracker.infrastructure.events.cdi", "color": " #969696"
}
,{
"name": " org.eclipse.cargotracker.interfaces.handling.rest", "color": " #bdbdbd"
}
,{
"name": " org.eclipse.pathfinder.internal", "color": " #d9d9d9"
}
,{
"name": " org.eclipse.cargotracker.infrastructure.routing", "color": " #3182bd"
}
,{
"name": " org.eclipse.cargotracker.interfaces.booking.sse", "color": " #6baed6"
}
,{
"name": " org.eclipse.cargotracker.domain.model.handling", "color": " #9ecae1"
}
,{
"name": " org.eclipse.cargotracker.domain.model.location", "color": " #c6dbef"
}
,{
"name": " org.eclipse.cargotracker.infrastructure.persistence.jpa", "color": " #e6550d"
}
,{
"name": " org.eclipse.cargotracker.interfaces.booking.facade.dto", "color": " #fd8d3c"
}
,{
"name": " org.eclipse.cargotracker.interfaces.booking.facade", "color": " #fdae6b"
}
,{
"name": " org.eclipse.cargotracker.interfaces.handling.mobile", "color": " #fdd0a2"
}
];
