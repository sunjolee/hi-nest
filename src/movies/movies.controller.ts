import {
    Controller,
    Get,
    Param,
    Post,
    Delete,
    Patch,
    Body,
    Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll() {
        return 'This will return all movies';
    }
    @Get('search')
    search(@Query('year') seachingYear: string) {
        return `We are searching for a movie made after: ${seachingYear}`;
    }

    @Get(':id')
    getOne(@Param('id') movieId: string) {
        return `This will return one movie with the id: ${movieId}`;
    }

    @Post()
    create(@Body() movieData) {
        console.log(movieData);
        return movieData;
    }

    @Delete(':id')
    remove(@Param('id') movieId: string) {
        return `This will delete a movie with the id: ${movieId}`;
    }

    @Patch(':id')
    patch(@Param('id') movieId: string, @Body() updateData) {

         console.log(movieId);
         console.log(updateData);

         const aa = {...updateData, name:'123', col:123};
         console.log(aa);

        return {
            updatedMovie: movieId,
            ...updateData,
        };
    }
}
