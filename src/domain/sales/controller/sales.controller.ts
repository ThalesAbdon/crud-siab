import { Controller, Inject } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ControllerCore } from 'src/core/controller/controller-core.controller';
import { CreateSalesDto } from '../dto/create-sales.dto';
import { SalesEntity } from '../entity/sales.entity';
import { SalesIdDto } from '../dto/sales-id.dto';
import { SalesService } from '../service/sale.service';
import { HttpContext } from 'src/core/auth/http.context';
@Controller('Sales')
@ApiTags('Sales')
export class SalesController extends ControllerCore<any, CreateSalesDto>(
  SalesEntity,
  CreateSalesDto,
  SalesIdDto,
) {
  constructor(
    @Inject(SalesService) private readonly service: SalesService,
    @Inject(HttpContext)
    protected httpContext: HttpContext,
  ) {
    super();
  }
}
