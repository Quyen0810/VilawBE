import { IsMongoId,IsNotEmpty, IsOptional, IsString } from "class-validator";


export class UpdateUserDto {

    @IsNotEmpty({ message: 'User ID is required' })
    @IsMongoId({ message: 'Invalid User ID format' })
    _id?: string;
   

    @IsOptional()
    @IsString()
    username?: string;
    
    @IsOptional()
    @IsString()
    image?: string;

   
}
